import Image from "next/image";

import recLogo from "../../../public/rec-logo.jpg";

export function Navbar() {
    return (
        <>
            <div className="bg-white">
                <Image
                    src={recLogo}
                    height="100"
                    alt="UCSD rec logo"
                />
            </div>
        </>
    );
}