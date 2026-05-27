const count = 20; //아이템 추가 생성시 새로 생성할 개수
let itemIndex = 0;

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const list = document.querySelector(".list");

        if (entry.isIntersecting) {
            for (let i = itemIndex+1; i <= itemIndex+count; ++i) {
                let item = document.createElement("p")

                item.textContent = i;
                item.className = "item";
                list.appendChild(item);
            }
            itemIndex += count;
        }
    })
}, {root: null, threshold: 1.0})

observer.observe(document.querySelector(".end"))