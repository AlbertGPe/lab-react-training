import './App.css';
import BoxColor from './components/BoxColor/BoxColor';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import CreditCard from './components/CreditCard/CreditCard';
import DriverCard from './components/DriverCard/DriverCard';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton/LikeButton';
import Random from './components/Random/Random';
import Rating from './components/Rating/Rating';
import picture1 from './assets/images/maxence.png'
import picture2 from './assets/images/maxence-glasses.png'
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import Facebook from './components/Facebook/Facebook';
import SignupPage from './components/SignupPage/SignupPage';
import RGBColorPicker from './components/RGBColorPicker/RGBColorPicker';


function App() {
  return (
    <div className="App">
      <p className='m-5'><b>Iteration 1</b></p>
      <div>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <p className='m-5'><b>Iteration 2</b></p>
      <div>
      <Greetings lang="de" children="Ludwig"/>
      <Greetings lang="fr" children="François"/>
      </div>

      <p className='m-5'><b>Iteration 3</b></p>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      <p className='m-5'><b>Iteration 4</b></p>
      <div className='d-flex flex-sm-column align-items-center'>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <p className='m-5'><b>Iteration 5</b></p>
      <div className='d-flex justify-content-center'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>

      <p className='m-5'><b>Iteration 6</b></p>
      <div className='d-flex flex-sm-column align-items-center'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>  

      <p className='m-5'><b>Iteration 7</b></p>
      <div className='d-flex flex-sm-column align-items-center'>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>

      <p className='m-5'><b>Iteration 8</b></p>
      <div className='d-flex justify-content-center align-items-center'>
        <LikeButton />
        <LikeButton />
      </div>

      <p className='m-5'><b>Iteration 9</b></p>
      <div className='d-flex flex-sm-column align-items-center'>
        <ClickablePicture 
          img={picture1} 
          imgClicked={picture2}
        />
      </div>

      <p className='m-5'><b>Iteration 10</b></p>
      <div className='d-flex justify-content-center align-items-center'>
        <Dice />
      </div>

      <p className='m-5'><b>Iteration 11</b></p>
      <div className='d-flex justify-content-center align-items-center'>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      </div> 
      <p className='m-5'><b>Iteration 12</b></p>
      <div className='d-flex justify-content-center align-items-center'>
        <NumbersTable limit={12} />
      </div> 

      <p className='m-5'><b>Iteration 13 & 14</b></p>
      <div className='d-flex justify-content-center align-items-center'>
        <Facebook />
      </div> 

      <p className='m-5'><b>Iteration 15</b></p>
      <div className='d-flex justify-content-center align-items-center'>
        <SignupPage />
      </div> 

      <p className='m-5'><b>Iteration 16</b></p>
      <div className='d-flex justify-content-center align-items-center'>
        <RGBColorPicker />
      </div> 

    </div>
  );
}

export default App;
