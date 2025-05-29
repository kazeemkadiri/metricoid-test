function Navbar() {
    return <nav className="flex flex-row justify-between items-center py-3 w-full">
        <div className="w-auto"><span className="logo rounded-[999px] text-[#007bff] bg-white outline-1 outline-[#007bff] px-[10px] py-[5px]">K</span> Kazeem Kadiri</div>

        <ul className="no-decoration flex flex-row gap-4 no-wrap py-5 text-grey">
            <li className="hover:text-[#007bff] cursor-pointer">About Me</li>
            <li className="hover:text-[#007bff] cursor-pointer">Skills</li>
            <li className="hover:text-[#007bff] cursor-pointer">Hobbies & Interests</li>
            <li className="hover:text-[#007bff] cursor-pointer">Passions</li>
            <li className="hover:text-[#007bff] cursor-pointer">Academic Background</li>
        </ul>
    </nav>
}

export default Navbar;