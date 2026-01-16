import Button from "../Atoms/Button";
import SportImage from '../../assets/images/banner.png';
const HeroSection = () => {
  return (
    <div className="position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '400px'
    }}>
      <div className="container">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-6 text-white py-5">
            <h1 className="display-3 fw-bold mb-4">Sports Gear for Champions</h1>
            <p className="lead mb-4">
              Elevate your game with premium sports equipment and apparel designed for peak performance
            </p>
            <div className="d-flex gap-3">
              <Button text="Shop Now" className="btn-light btn-lg px-5" />
              <Button text="View Collection" className="btn-outline-light btn-lg px-5" />
            </div>
            <div className="mt-4 d-flex gap-4">
              <div>
                <h3 className="fw-bold">5000+</h3>
                <p className="mb-0">Happy Customers</p>
              </div>
              <div>
                <h3 className="fw-bold">500+</h3>
                <p className="mb-0">Products</p>
              </div>
              <div>
                <h3 className="fw-bold">4.9★</h3>
                <p className="mb-0">Average Rating</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="text-center">
              <img src={SportImage} 
                   alt="Sports Equipment" 
                   style={{ maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
