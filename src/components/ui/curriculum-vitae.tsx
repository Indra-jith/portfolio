import CustomButton from "../custom-button";
import { MdOutlineOpenInNew } from "react-icons/md";

export const ViewCVButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/IndrajithMP_Resume.pdf';
        link.download = 'IndrajithMP_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="fixed top-3 md:top-10 right-0 md:right-10 w-fit h-fit z-1000">
            <CustomButton
                onClick={handleDownload}
                nofill
                className="font-normal"
            >
                <div className="flex items-center justify-end gap-2 hover:scale-105 transition-all">
                    <MdOutlineOpenInNew />
                    <span>Download CV</span>
                </div>
            </CustomButton>
        </div>
    );
};
