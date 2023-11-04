import { Layout } from '../../components';
import './home-styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <Layout>
      <div style={{ marginLeft: '12%' }}>
        <p className="paragraph" >
          Tu opinión nos ayuda a mejorar la calidad de nuestro servicio. ¡Contanos tu experiencia con las atenciones recibidas en el último año!
        </p>
      </div>
    </Layout>
  );
};

export default Home;
