import wait from "@/lib/wait"

export default async function BoarListdPage(){
    await wait(3000);
    return (
            <div className="text-2xl font-bold">BoardListPage</div>
    )
}