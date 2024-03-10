import Image from "next/image";
import React from "react";

// type Props = {
//     imageUrl: string;
// };

const Avatar = async ({ imageUrl }: { imageUrl: string }) => {
    return(
        <Image className="w-auto h-[100%]" src={imageUrl=imageUrl} alt="avatar" width={200} height={200} />
    )
};

export default Avatar;
