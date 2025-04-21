import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
      <Image
        src="/profile.webp"
        alt="Muhammad Rizal"
        fill
        className="object-cover"
      />
    </div>
  );
}
