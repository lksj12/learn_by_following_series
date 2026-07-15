export default function BoardLayout({
    children,
    boardList, 
    comments,
    // admin
}: Readonly<{
    children: React.ReactNode
    boardList: React.ReactNode
    comments: React.ReactNode
    // admin: React.ReactNode
}>) {
    // const isAdmin = true;
    return(
        <>
            {/* {isAdmin && admin} */}
            {children}
            {boardList}
            {comments}
        </>
    )
}