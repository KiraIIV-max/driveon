import {cn} from "../../lib/utils"

function Button ({
    children,
    variant = "default",
    size = "default",
    className,
    disabled = false,
    ...props
}){
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-info focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = { 
        primary: "bg-charcoal text-white hover:bg-charcoal/90 rounded-sm",
        secondary: "border border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-white rounded-sm",
        ghost: "text-charcoal hover:bg-surface rounded-sm",
        disabled: "bg-divider text-taupe cursor-not-allowed rounded-sm"
        
    }

    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base"
    }  

    return (
        <button className={cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
        )} 
            disabled = {disabled || variant === "disabled"}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button