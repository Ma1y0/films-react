import { NavBar } from "../Components"

const _404NotFound = () => (
    <>
        <NavBar />
        <div className="flex flex-row items-center justify-center h-screen w-full">
            <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">404 Page Not Found</h1>
        </div>
    </>
)

export default _404NotFound