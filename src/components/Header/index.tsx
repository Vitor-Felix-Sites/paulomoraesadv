
export const Header =() => {

return(
    <header className="flex justify-between items-center h-[105px] w-full px-[362px] ">	
        <div className="logo">
    <h1>header</h1>
        </div>
        <nav className="flex items-center gap-[22px] v-text-white">
            <ul>
                <li className="flex gap-[42px] uppercase">
                    <a href="#">Home</a>
                    <a href="About me">ABOUT ME</a>
                    <a href="Pratice areas">PRATICE AREAS</a>
                    <a href="Pages">PAGES</a>
                </li>
            </ul>
            <button className="uppercase v-bg-highlight px-[20px] py-[10px] w-[168px] h-[54px] text-white">
                Contact me
            </button>
        </nav>
    </header>
)
}