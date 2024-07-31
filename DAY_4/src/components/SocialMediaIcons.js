import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
