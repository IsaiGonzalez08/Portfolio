export const Chip = ({ title }: { title: string }) => {
    return (
        <div className="px-5 py-3 bg-snow-white rounded-full text-sm font-light max-w-fit">
            {title}
        </div>
    )
}