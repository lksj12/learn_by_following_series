const Database = require("better-sqlite3");
const db = new Database("test.db");

// 테이블 생성
db.exec(`
    CREATE TABLE IF NOT EXISTS product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL
    )
`);

module.exports = {
    // 데이터베이스 연결 객체 export
    db: db,
    
    // 제품 생성
    create: function(productData) {
        const query = `INSERT INTO product (name, description, price) VALUES (?, ?, ?)`;
        const stmt = db.prepare(query);
        try {
            const result = stmt.run(productData.name, productData.description, productData.price);
            
            // 성공 여부를 명확히 반환
            if (result.changes > 0) {
                return {
                    id: result.lastInsertRowid,
                    ...productData
                };
            }
            return null;
        } catch (error) {
            console.error("Database create error:", error);
            throw error;
        }
    },
    
    // 제품 전체 조회
    findAll: function(filter = {}) {
        const query = "SELECT * FROM product";
        const stmt = db.prepare(query);
        return stmt.all();
    },
    
    // 특정 ID로 제품 조회
    findById: function(id) {
        const query = "SELECT * FROM product WHERE id = ?";
        const stmt = db.prepare(query);
        return stmt.get(id);
    },
    
    // 특정 ID 제품 업데이트
    findByIdAndUpdate: function(id, updateData, options = {}) {
        // UPDATE 쿼리 구성
        const query = "UPDATE product SET name = ?, description = ?, price = ? WHERE id = ?";
        const stmt = db.prepare(query);
        
        // 데이터 업데이트 (NULL 처리 필요)
        const result = stmt.run(
            updateData.name || null,
            updateData.description || null, 
            updateData.price || null,
            id
        );
        
        // 성공 여부 확인
        if (result.changes > 0) {
            // 업데이트된 데이터를 조회하여 반환 (options.new = true일 때)
            return this.findById(id);
        }
        
        return null;
    },
    
    // 특정 ID 제품 삭제
    findByIdAndDelete: function(id) {
        const query = "DELETE FROM product WHERE id = ?";
        const stmt = db.prepare(query);
        const result = stmt.run(id);
        
        // 삭제 성공 여부 반환 
        return result.changes > 0;
    }
};
