import bgLeft31 from 'assets/img/bg/bg-left-31.png';
import bgRight31 from 'assets/img/bg/bg-right-31.png';
import gallery48 from 'assets/img/gallery/48.png';
import gallery49 from 'assets/img/gallery/49.png';
import gallery50 from 'assets/img/gallery/50.png';
import gallery64 from 'assets/img/gallery/64.png';

interface posts {
  title: string;
  date: string;
  rating: number;
  img: string;
}
const posts: posts[] = [
  {
    title: "Beautiful Frence, Let's Travelling!",
    date: 'Monday, Nov 07, 2022',
    rating: 4.8,
    img: gallery48
  },
  {
    title: 'Man Standing on Watching Mountain',
    date: 'Monday, Nov 06, 2022',
    rating: 4.5,
    img: gallery49
  },
  {
    title: "Beautiful Bali Indonesia, Let's Travelling!",
    date: 'Monday, Nov 05, 2022',
    rating: 4.2,
    img: gallery50
  },
  {
    title: 'Chasing sunsets, making memories worldwide.',
    date: 'Monday, Nov 04, 2022',
    rating: 4.5,
    img: gallery64
  }
];
const LatestPosts = () => {
  return (
    <section className="pb-7 pt-0 overflow-x-hidden">
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgLeft31})`,
          backgroundPosition: 'left',
          backgroundSize: '40%',
          zIndex: '1'
        }}
      />
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgRight31})`,
          backgroundPosition: 'left',
          backgroundSize: '26%',
          zIndex: '1'
        }}
      />
      <div className="bg-latest-posts" />
      <div className="container-medium text-center position-relative z-2">
        <h3 className="mb-2 text-body-emphasis">
          Our Latest Posts For Travellers
        </h3>
        <p className="mb-0 text-body-tertiary mb-13">
          Find the best travel memories from our past tours and get a clear idea
          of what we do.
        </p>
      </div>
    </section>
  );
};

export default LatestPosts;
