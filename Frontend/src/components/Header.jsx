export default function Header() {
    return (
        <>
        <div className="p-8">
          <div className="flex justify-between">
            <div className="flex flex-row justify-center">
                <div>
                    Logo
                </div>
                <div>
                     ConfigManager
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="px-12">
                    Home
                </div>
                <div className="px-12">
                    How it works
                </div>
                <div className="px-12">
                    FAQ
                </div>
                <div className="px-12">
                    Pricing
                </div>
            </div>
            <div className="border border-solid border-[#ffffff] p-2 px-6">Login</div>
          </div>
        </div>
      </>
    )
}
