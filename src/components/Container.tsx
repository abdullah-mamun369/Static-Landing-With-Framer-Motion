import { cn } from "@/lib/utils";

type TContainerProps = {
    children: React.ReactNode;
    className?: string;
}


const Container = ({ children, className }: TContainerProps) => {
    return (
        <div className={cn("w-full h-full max-w-[1240px] px-[20px] mx-auto", className)}>
            {children}
        </div>
    );
};

export default Container;