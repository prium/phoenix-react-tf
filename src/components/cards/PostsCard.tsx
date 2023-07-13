import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import CommentField from 'components/modules/social/CommentField';
import PostComments from 'components/modules/social/PostComments';
import PostsGallery from 'components/modules/social/PostsGallery';
import { PostsData } from 'data/social/postsData';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostsCard = ({ post }: { post: PostsData }) => {
  return (
    <div className="mb-5">
      <Card className="mb-4">
        <Card.Body className="p-3 p-sm-4">
          <div className="border-bottom mb-3">
            <div className="d-flex align-items-center mb-3">
              <Link to="/apps/social/profile" style={{ lineHeight: 0 }}>
                <Avatar size="xl" src={post.avatar} className="me-2" />
              </Link>
              <div className="flex-1">
                <Link
                  to="/apps/social/profile"
                  className="fw-bold mb-0 text-black"
                >
                  {post.name}
                </Link>
                <p className="fs-10 mb-0 text-600 fw-semi-bold">
                  {post.time}
                  {post.location && (
                    <>
                      <FontAwesomeIcon
                        icon="circle"
                        className="text-300"
                        transform="shrink-10 down-2"
                      />
                      {post.location}
                      <FontAwesomeIcon
                        icon="circle"
                        className="text-300"
                        transform="shrink-10 down-2"
                      />
                      <FontAwesomeIcon
                        icon="earth-americas"
                        className="text-900"
                      />
                    </>
                  )}
                </p>
              </div>
              <RevealDropdownTrigger>
                <RevealDropdown>
                  <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                  <Dropdown.Item eventKey="2" className="text-danger">
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Download</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Report abuse</Dropdown.Item>
                </RevealDropdown>
              </RevealDropdownTrigger>
            </div>
            <p className="text-800">{post.post}</p>
            {post.images && <PostsGallery images={post.images} />}
          </div>
          <div className="d-flex">
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon="heart" className="me-1" />}
              className="p-0 me-3 fs-10 fw-bolder"
            >
              {post.likes}
            </Button>
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon="comment" className="me-1" />}
              className="p-0 me-3 fs-10 fw-bolder text-900"
            >
              {post.comment}
            </Button>
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon="share" className="me-1" />}
              className="p-0 me-3 fs-10 fw-bolder text-900"
            >
              {post.shares}
            </Button>
          </div>
        </Card.Body>
        <div className="bg-100 border-top p-3 p-sm-4">
          {post.comments && <PostComments comments={post.comments} />}
          <CommentField avatar={post.commentInputAvatar} />
        </div>
      </Card>
    </div>
  );
};

export default PostsCard;
