import React from 'react';
import CropCard from '../components/CropCard';
import '../App.css';

const CropsPage = () => {
  const cropData = [
    {
      cropName: "Rice",
      image: "https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg",
      description: "Rice is the staple food for over half of the world's population. It grows well in warm and wet conditions.",
      area: "12,000",
      production: "1,500,000",
      yieldPerHectare: "1.25",
      onClick: () => console.log("Navigate to Rice details"),
    },
    {
      cropName: "Maize",
      image: "https://tracextech.com/wp-content/uploads/2022/03/maize-supply-chain.jpg",
      description: "Maize (corn) is a major cereal grain crop used for food, feed, and industrial products.",
      area: "10,000",
      production: "2,000,000",
      yieldPerHectare: "2.0",
      onClick: () => console.log("Navigate to Maize details"),
    },
    {
      cropName: "Chickpea",
      image: "https://www.haifa-group.com/sites/default/files/chickpeas.jpg",
      description: "Chickpeas are high-protein legumes, commonly used in salads, stews, and making hummus.",
      area: "8,500",
      production: "800,000",
      yieldPerHectare: "1.2",
      onClick: () => console.log("Navigate to Chickpea details"),
    },
    {
      cropName: "Kidneybeans",
      image: "https://c8.alamy.com/comp/2GC24AB/ripe-kidney-bean-growing-on-farmbush-with-bunch-of-podsof-haricot-plant-phaseolus-vulgaris-var-nanus-ripening-in-homemade-gardenorganic-farmin-2GC24AB.jpg",
      description: "Kidney beans are rich in protein and commonly used in salads and soups.",
      area: "7,200",
      production: "1,000,000",
      yieldPerHectare: "1.5",
      onClick: () => console.log("Navigate to Kidneybeans details"),
    },
    {
      cropName: "Pigeonpeas",
      image: "https://via.placeholder.com/300x200?text=Pigeonpeas",
      description: "Pigeon peas are important pulse crops, especially in tropical and subtropical regions.",
      area: "5,000",
      production: "600,000",
      yieldPerHectare: "1.0",
      onClick: () => console.log("Navigate to Pigeonpeas details"),
    },
    {
      cropName: "Mothbeans",
      image: "https://via.placeholder.com/300x200?text=Mothbeans",
      description: "Mothbeans are drought-resistant and are grown mainly in arid regions.",
      area: "4,000",
      production: "400,000",
      yieldPerHectare: "0.8",
      onClick: () => console.log("Navigate to Mothbeans details"),
    },
    {
      cropName: "Mungbean",
      image: "https://via.placeholder.com/300x200?text=Mungbean",
      description: "Mungbeans are rich in protein and are used to make soups, curries, and desserts.",
      area: "6,000",
      production: "700,000",
      yieldPerHectare: "1.4",
      onClick: () => console.log("Navigate to Mungbean details"),
    },
    {
      cropName: "Blackgram",
      image: "https://via.placeholder.com/300x200?text=Blackgram",
      description: "Blackgram (Urad dal) is commonly used in Indian cuisine, especially in dals and fritters.",
      area: "5,500",
      production: "650,000",
      yieldPerHectare: "1.3",
      onClick: () => console.log("Navigate to Blackgram details"),
    },
    {
      cropName: "Lentil",
      image: "https://via.placeholder.com/300x200?text=Lentil",
      description: "Lentils are small legumes rich in protein and are commonly used in soups and stews.",
      area: "7,000",
      production: "1,100,000",
      yieldPerHectare: "1.5",
      onClick: () => console.log("Navigate to Lentil details"),
    },
    {
      cropName: "Pomegranate",
      image: "https://via.placeholder.com/300x200?text=Pomegranate",
      description: "Pomegranate is a fruit rich in antioxidants, commonly used in juices and salads.",
      area: "9,000",
      production: "1,200,000",
      yieldPerHectare: "1.8",
      onClick: () => console.log("Navigate to Pomegranate details"),
    },
    {
      cropName: "Banana",
      image: "https://via.placeholder.com/300x200?text=Banana",
      description: "Bananas are a rich source of potassium and are widely consumed globally.",
      area: "15,000",
      production: "3,500,000",
      yieldPerHectare: "2.5",
      onClick: () => console.log("Navigate to Banana details"),
    },
    {
      cropName: "Mango",
      image: "https://via.placeholder.com/300x200?text=Mango",
      description: "Mangoes are tropical fruits known for their sweetness and versatility in cooking.",
      area: "20,000",
      production: "5,000,000",
      yieldPerHectare: "3.0",
      onClick: () => console.log("Navigate to Mango details"),
    },
    {
      cropName: "Grapes",
      image: "https://via.placeholder.com/300x200?text=Grapes",
      description: "Grapes are used in making juices, wines, and are also consumed as fresh fruit.",
      area: "10,500",
      production: "2,200,000",
      yieldPerHectare: "2.1",
      onClick: () => console.log("Navigate to Grapes details"),
    },
    {
      cropName: "Watermelon",
      image: "https://via.placeholder.com/300x200?text=Watermelon",
      description: "Watermelons are a popular summer fruit known for their sweetness and hydration properties.",
      area: "8,500",
      production: "1,800,000",
      yieldPerHectare: "2.2",
      onClick: () => console.log("Navigate to Watermelon details"),
    },
    {
      cropName: "Muskmelon",
      image: "https://via.placeholder.com/300x200?text=Muskmelon",
      description: "Muskmelons are sweet fruits, often called cantaloupes, commonly grown in warm climates.",
      area: "7,500",
      production: "1,500,000",
      yieldPerHectare: "2.0",
      onClick: () => console.log("Navigate to Muskmelon details"),
    },
    {
      cropName: "Apple",
      image: "https://via.placeholder.com/300x200?text=Apple",
      description: "Apples are popular fruits that come in various varieties, used in cooking and desserts.",
      area: "11,000",
      production: "2,500,000",
      yieldPerHectare: "2.3",
      onClick: () => console.log("Navigate to Apple details"),
    },
    {
      cropName: "Orange",
      image: "https://via.placeholder.com/300x200?text=Orange",
      description: "Oranges are citrus fruits, known for their juicy sweetness and high vitamin C content.",
      area: "13,000",
      production: "3,000,000",
      yieldPerHectare: "2.7",
      onClick: () => console.log("Navigate to Orange details"),
    },
    {
      cropName: "Papaya",
      image: "https://via.placeholder.com/300x200?text=Papaya",
      description: "Papayas are tropical fruits that are rich in enzymes, vitamins, and antioxidants.",
      area: "6,500",
      production: "900,000",
      yieldPerHectare: "1.6",
      onClick: () => console.log("Navigate to Papaya details"),
    },
    {
      cropName: "Coconut",
      image: "https://via.placeholder.com/300x200?text=Coconut",
      description: "Coconuts are used in cooking, making oil, and for their water, which is popular as a drink.",
      area: "30,000",
      production: "10,000,000",
      yieldPerHectare: "5.0",
      onClick: () => console.log("Navigate to Coconut details"),
    },
    {
      cropName: "Cotton",
      image: "https://via.placeholder.com/300x200?text=Cotton",
      description: "Cotton is a soft, fluffy fiber harvested from the cotton plant and used to make fabric.",
      area: "8,500",
      production: "1,200,000",
      yieldPerHectare: "1.6",
      onClick: () => console.log("Navigate to Cotton details"),
    },
    {
      cropName: "Jute",
      image: "https://via.placeholder.com/300x200?text=Jute",
      description: "Jute is a long, soft vegetable fiber used in making ropes, bags, and other fabric products.",
      area: "4,000",
      production: "700,000",
      yieldPerHectare: "0.9",
      onClick: () => console.log("Navigate to Jute details"),
    },
    {
      cropName: "Coffee",
      image: "https://via.placeholder.com/300x200?text=Coffee",
      description: "Coffee is one of the world's most popular beverages, made from the roasted seeds of the Coffea plant.",
      area: "5,500",
      production: "800,000",
      yieldPerHectare: "1.2",
      onClick: () => console.log("Navigate to Coffee details"),
    },
  ];

  return (
    <div className="home">
      <h1>Welcome to the Crop Recommendation System</h1>
      <p>Get personalized crop recommendations based on your environmental conditions.</p>
      
      <div className="crop-card-container">
        {cropData.map((crop, index) => (
          <CropCard
            key={index}
            cropName={crop.cropName}
            image={crop.image}
            description={crop.description}
            area={crop.area}
            production={crop.production}
            yieldPerHectare={crop.yieldPerHectare}
            onClick={crop.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CropsPage;
