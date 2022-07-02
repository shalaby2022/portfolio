import myImg from "../../assets/myProfile.jpeg";
import Footer from "../../components/footer";

const Home = () => {
    const style = {
        borderRadius: '50%'
    }

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-between align-items-center">
                <h4 className="desc text-start text-muted col-12 col-md-6">
                    Hello I'm <span className="text-danger fw-bold"> Ahmed Shalaby</span> I'm a front-end developer, and I create fun,
                    innovative, accessible, and fast websites. I try to leave every bit of
                    code I touch more readable, modular, performant and accessible than I
                    found it.
                </h4>
                <div className="col-12 col-md-5">
                    <img style={style} className="w-75" src={myImg} alt="profile" />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;