type RatingProps = {
  rating: number;
};

const STAR_COLOR = "#EED202";

const Star = ({ fill }: { fill: number }) => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <path
      d="M16.7201 7.63472L14.3812 9.88877C14.06 10.1978 13.8419 10.8158 13.9086 11.2582L14.2721 13.9C14.5084 15.5906 13.4602 16.3237 11.9454 15.536L9.37622 14.1909C8.94601 13.9667 8.24314 13.9788 7.82505 14.2272L5.57705 15.5421C3.80168 16.5782 2.74131 15.7966 3.21393 13.797L3.87439 11.0037C3.99558 10.4947 3.77139 9.79788 3.38965 9.4525L1.26284 7.53171C-0.258038 6.15625 0.166112 4.90804 2.21415 4.7505L4.80752 4.5566C5.29227 4.52024 5.88002 4.13851 6.10421 3.7083L7.44937 1.12704C8.24314 -0.381717 9.52165 -0.375657 10.2912 1.14522L11.4909 3.52046C11.6969 3.92037 12.218 4.30817 12.6604 4.37482L15.8718 4.89592C17.6047 5.18677 17.9865 6.4168 16.7201 7.63472Z"
      fill={`url(#gradient-${fill})`}
    />
    <defs>
      <linearGradient id={`gradient-${fill}`} x1="0" x2="1" y1="0" y2="0">
        <stop offset={`${fill}%`} stopColor={STAR_COLOR} />
        <stop offset={`${fill}%`} stopColor="#E0E0E0" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Rating({ rating }: RatingProps) {
  const MAX_STARS = 5;
  const stars = [];

  for (let i = 0; i < MAX_STARS; i++) {
    const currentStarFill = Math.min(100, Math.max(0, (rating - i) * 100));
    stars.push(<Star key={i} fill={currentStarFill} />);
  }

  return <div className="flex items-center">{stars}</div>;
}
