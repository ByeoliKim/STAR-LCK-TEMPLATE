type StarIconProps = {
  className?: string;
};

export default function StarIcon({ className }: StarIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <path
        d="M50 5
           L61 35
           H94
           L67 54
           L78 85
           L50 67
           L22 85
           L33 54
           L6 35
           H39
           Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
