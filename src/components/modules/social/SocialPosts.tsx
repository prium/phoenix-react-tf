import PostsCard from 'components/cards/PostsCard';
import { PostsData } from 'data/social/postsData';
import { Button } from 'react-bootstrap';

const SocialPosts = ({ data }: { data: PostsData[] }) => {
  return (
    <>
      <div className="mb-9">
        {data.map((post, index) => (
          <PostsCard key={index} post={post} />
        ))}
      </div>
      <div className="text-center">
        <Button variant="link" className="fs-8 p-0">
          Load more
        </Button>
      </div>
    </>
  );
};

export default SocialPosts;
