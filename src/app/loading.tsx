import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
    return (
        <div className="grid grid-cols-3 gap-8">
            {"abcdefghi".split('').map(i => (
                <SkeletonCard key={i}></SkeletonCard>
            ))}
        </div>
    )
}