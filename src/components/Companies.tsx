const Companies = () => {
    const companiesLogos = [
        "./icon/Microsoft.svg",
        "./icon/Mashable.svg",
        "./icon/Fortune.svg",
        "./icon/Entrepreneur.svg",
        "./icon/Business web.svg"
    ];

    return (
        <div className="bg-gray-100 md:py-12 py-6 text-center w-full">
            <h2 className="md:text-xl md:mb-6 text-lg mb-3 font-bold">TRUSTED BY OVER 1K+ COMPANIES</h2>
            <div className="flex justify-evenly items-center">
                {companiesLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={logo} className="md:h-6 h-3 mr-2" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Companies