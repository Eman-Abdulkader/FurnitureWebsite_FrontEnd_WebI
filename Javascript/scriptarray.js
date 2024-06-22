
document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        {
          id:1,
          image:"../Pictures/Pictures/Knicknacks1.jpeg",
          type:" Polaroid",
          price:"90$",
        },
        {
          id:2,
          image:"../Pictures/Pictures/Knicknacks10.jpeg",
          type:"Vases",
          price:"100$",
        },{
          id:3,
          image:"../Pictures/Pictures/Knicknacks11.jpeg",
          type:"Candles & Vases ",
          price:"80$",
        },
        {
          id:4,
          image:"../Pictures/Pictures/Knicknacks12.jpeg",
          type:"plants",
          price:"60$",
        },
        {
          id:5,
          image:"../Pictures/Pictures/Knicknacks5.jpeg",
          type:"Accessories",
          price:"150$",
        },
        {
          id:6,
          image:"../Pictures/Pictures/Knicknacks4.jpeg",
          type:"Typewriter",
          price:"30$",
        },
        {
          id:7,
          image:"../Pictures/Pictures/Knicknacks14.jpeg",
          type:"Circular vases",
          price:"40$",
        },
        {
          id:8,
          image:"../Pictures/Pictures/Knicknacks15.jpeg",
          type:"Candles",
          price:"50$",
        },
        {
            id:9,
            image:"../Pictures/Pictures/Knicknacks16.jpeg",
            type:" Candles",
            price:"50$",
          },
          {
            id:10,
            image:"../Pictures/Pictures/Knicknacks17.jpeg",
            type:"Candles",
            price:"55$",
          },{
            id:11,
            image:"../Pictures/Pictures/Knicknacks18.jpeg",
            type:"Candles ",
            price:"80$",
          },
          {
            id:12,
            image:"../Pictures/Pictures/Knicknacks19.jpeg",
            type:"Candles",
            price:"60$",
          },
          {
            id:13,
            image:"../Pictures/Pictures/Knicknacks2.jpeg",
            type:"Old Telscope",
            price:"250$",
          },
          {
            id:14,
            image:"../Pictures/Pictures/Knicknacks3.jpeg",
            type:"Old Music Player",
            price:"50$",
          },
          {
            id:16,
            image:"../Pictures/Pictures/Knicknacks6.jpeg",
            type:"Clock ",
            price:"50$",
          },
          {
            id:17,
            image:"../Pictures/Pictures/Knicknacks7.jpeg",
            type:"Sand Clock",
            price:"70$",
          },
      ];
    
      const container = document.querySelector(".Knickknacks__container-rows");
      const html = elements.map((element) => `
      <div class="box">
        <img src="${element.image}" alt="">
        <h3> ${element.type}</h3>
        <p> price:${element.price}</p>
      </div>`
    ).join('');
      container.innerHTML = html;
    });



    //Arrage Vintage
        document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        {
          id:1,
          image:"../Pictures/Pictures/VintageBed18.jpeg",
          type:" Vintage Bed",
          price:"90$",
        },
        {
          id:2,
          image:"../Pictures/Pictures/VintageBed19.jpeg",
          type:"Vintage Bed",
          price:"100$",
        },{
          id:3,
          image:"../Pictures/Pictures/VintageDesk20.jpeg",
          type:"Vintage Desk ",
          price:"80$",
        },
        {
          id:4,
          image:"../Pictures/Pictures/VintageChair13.jpeg",
          type:"Vintage Chair",
          price:"60$",
        },
        {
          id:5,
          image:"../Pictures/Pictures/VintageChair14.jpeg",
          type:"Vintage Chair",
          price:"150$",
        },
        {
          id:6,
          image:"../Pictures/Pictures/VintageChair15.jpeg",
          type:"Vintage Chair",
          price:"30$",
        },
        {
          id:7,
          image:"../Pictures/Pictures/VintageChair16.jpeg",
          type:"Vintage Chair",
          price:"40$",
        },
        {
          id:8,
          image:"../Pictures/Pictures/VintageDesser12.jpeg",
          type:"Vintage Dresser",
          price:"50$",
        },
        {
            id:9,
            image:"../Pictures/Pictures/VintageDresser10.jpeg",
            type:" Vintage Dresser",
            price:"50$",
          },
          {
            id:10,
            image:"../Pictures/Pictures/VintageDresser6.jpeg",
            type:"Vintage Dresser",
            price:"55$",
          },{
            id:11,
            image:"../Pictures/Pictures/VintageDresser7.jpeg",
            type:"Vintage Dresser ",
            price:"80$",
          },
          {
            id:12,
            image:"../Pictures/Pictures/VintageMirrors1.jpeg",
            type:"Vintage Mirrors",
            price:"60$",
          },
          {
            id:13,
            image:"../Pictures/Pictures/VintageSideTable2.jpeg",
            type:"Vintage Mirrors",
            price:"250$",
          },
          {
            id:14,
            image:"../Pictures/Pictures/VintageStand11.jpeg",
            type:"Vintage Stand",
            price:"50$",
          },
          {
            id:16,
            image:"../Pictures/Pictures/VintageVanity4.jpeg",
            type:"Vintage Vanity ",
            price:"50$",
          },
          {
            id:17,
            image:"../Pictures/Pictures/VintageVanity5.jpeg",
            type:"Vintage Vanity",
            price:"70$",
          },
      ];
    
      const container = document.querySelector(".Vintage__container-rows");
      const html = elements.map((element) => `
      <div class="box">
        <img src="${element.image}" alt="">
        <h3> ${element.type}</h3>
        <p> price:${element.price}</p>
      </div>`
    ).join('');
      container.innerHTML = html;
    });

//BedRoom Array
    document.addEventListener("DOMContentLoaded", function() {
        const elements = [
            {
              id:1,
              image:"../Pictures/Pictures/BedRoomBed1.jpeg",
              type:"  Bed",
              price:"90$",
            },
            {
              id:2,
              image:"../Pictures/Pictures/BedRoomBed2.jpeg",
              type:" Bed",
              price:"100$",
            },{
              id:3,
              image:"../Pictures/Pictures/BedRoomBed3.jpeg",
              type:"Bed",
              price:"80$",
            },
            {
              id:4,
              image:"../Pictures/Pictures/BedRoomBed4.jpeg",
              type:"Bed",
              price:"60$",
            },
            {
              id:5,
              image:"../Pictures/Pictures/BedRoomCloset1.jpeg",
              type:"Closet",
              price:"150$",
            },
            {
              id:6,
              image:"../Pictures/Pictures/BedRoomCloset2.jpeg",
              type:"Closet",
              price:"30$",
            },
            {
              id:7,
              image:"../Pictures/Pictures/BedRoomCloset3.jpeg",
              type:"Closet",
              price:"40$",
            },
            {
              id:8,
              image:"../Pictures/Pictures/BedRoomCloset4.jpeg",
              type:"Closet",
              price:"50$",
            },
            {
                id:9,
                image:"../Pictures/Pictures/BedRoomDresser1.jpeg",
                type:"  Dresser",
                price:"50$",
              },
              {
                id:10,
                image:"../Pictures/Pictures/BedRoomDresser2.jpeg",
                type:" Dresser",
                price:"55$",
              },{
                id:11,
                image:"../Pictures/Pictures/BedRoomDresser3.jpeg",
                type:" Dresser ",
                price:"80$",
              },
              {
                id:12,
                image:"../Pictures/Pictures/BedRoomDresser4.jpeg",
                type:"Dresser",
                price:"60$",
              },
              {
                id:13,
                image:"../Pictures/Pictures/BedRoomNightStand1.jpeg",
                type:"Night Stand",
                price:"50$",
              },
              {
                id:14,
                image:"../Pictures/Pictures/BedRoomNightStand2.jpeg",
                type:"Night Stand",
                price:"50$",
              },
              {
                id:16,
                image:"../Pictures/Pictures/BedRoomNightStand3.jpeg",
                type:"Night Stand",
                price:"50$",
              },
              {
                id:17,
                image:"../Pictures/Pictures/BedRoomNightStand4.jpeg",
                type:"Night Stand",
                price:"70$",
              },
          ];
        
          const container = document.querySelector(".bedRoom__container-rows");
          const html = elements.map((element) => `
          <div class="box">
            <img src="${element.image}" alt="">
            <h3> ${element.type}</h3>
            <p> price:${element.price}</p>
          </div>`
        ).join('');
          container.innerHTML = html;
        });

        //LivingRoom Array
        document.addEventListener("DOMContentLoaded", function() {
            const elements = [
                {
                  id:1,
                  image:"../Pictures/Pictures/LivingRoomCouch1.jpeg",
                  type:"  Couch",
                  price:"90$",
                },
                {
                  id:2,
                  image:"../Pictures/Pictures/LivingRoomCouch10.jpeg",
                  type:" Couch",
                  price:"100$",
                },{
                  id:3,
                  image:"../Pictures/Pictures/LivingRoomCouch11.jpeg",
                  type:"Couch",
                  price:"80$",
                },
                {
                  id:4,
                  image:"../Pictures/Pictures/LivingRoomCouch12.jpeg",
                  type:"Couch",
                  price:"60$",
                },
                {
                  id:5,
                  image:"../Pictures/Pictures/LivingRoomChair21.jpeg",
                  type:"Chair",
                  price:"150$",
                },
                {
                  id:6,
                  image:"../Pictures/Pictures/LivingRoomChair27.jpeg",
                  type:"Chair",
                  price:"30$",
                },
                {
                  id:7,
                  image:"../Pictures/Pictures/LivingRoomChair28.jpeg",
                  type:"Chair",
                  price:"40$",
                },
                {
                  id:8,
                  image:"../Pictures/Pictures/LivingRoomChair20.jpeg",
                  type:"Chair",
                  price:"50$",
                },
                {
                    id:9,
                    image:"../Pictures/Pictures/LivingRoomShelves.jpeg",
                    type:"  Shelves",
                    price:"50$",
                  },
                  {
                    id:10,
                    image:"../Pictures/Pictures/LivingRoomSideTables4.jpeg",
                    type:" Side Table",
                    price:"55$",
                  },{
                    id:11,
                    image:"../Pictures/Pictures/LivingRoomSideTables3.jpeg",
                    type:" Side Table ",
                    price:"80$",
                  },
                  {
                    id:12,
                    image:"../Pictures/Pictures/LivingRoomSideTables7.jpeg",
                    type:"Side Table",
                    price:"60$",
                  },
                  {
                    id:13,
                    image:"../Pictures/Pictures/LivingRoomLamp1.jpeg",
                    type:"Lamp",
                    price:"50$",
                  },
                  {
                    id:14,
                    image:"../Pictures/Pictures/LivingRoomLamp2.jpeg",
                    type:"Lamp",
                    price:"50$",
                  },
                  {
                    id:16,
                    image:"../Pictures/Pictures/LivingRoomLampModern3.jpeg",
                    type:"Modern Lamp",
                    price:"50$",
                  },
                  {
                    id:17,
                    image:"../Pictures/Pictures/LivingRoomLampModern4.jpeg",
                    type:"Modern Lamp",
                    price:"70$",
                  },
              ];
            
              const container = document.querySelector(".LivingRoom__container-rows");
              const html = elements.map((element) => `
              <div class="box">
                <img src="${element.image}" alt="">
                <h3> ${element.type}</h3>
                <p> price:${element.price}</p>
              </div>`
            ).join('');
              container.innerHTML = html;
            });

//Kitchen Array
document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        {
          id:1,
          image:"../Pictures/Pictures/KitchenCabinet3.jpeg",
          type:"  Cabinet",
          price:"90$",
        },
        {
          id:2,
          image:"../Pictures/Pictures/KitchenCabinet7.jpeg",
          type:" Cabinet",
          price:"100$",
        },{
          id:3,
          image:"../Pictures/Pictures/KitchenBuffets2.jpeg",
          type:"Buffet",
          price:"80$",
        },
        {
          id:4,
          image:"../Pictures/Pictures/KitchenCabinet3.jpeg",
          type:"Cabinet",
          price:"60$",
        },
        {
          id:5,
          image:"../Pictures/Pictures/KitchenBuffets3.jpeg",
          type:"Buffet",
          price:"150$",
        },
        {
          id:6,
          image:"../Pictures/Pictures/KitchenBuffets4.jpeg",
          type:"Buffet",
          price:"30$",
        },
        {
          id:7,
          image:"../Pictures/Pictures/KitchenPantry2.jpeg",
          type:"Pantry",
          price:"40$",
        },
        {
          id:8,
          image:"../Pictures/Pictures/KitchenPantry1.jpeg",
          type:"Pantry",
          price:"50$",
        },
        {
            id:9,
            image:"../Pictures/Pictures/KitchenCabinet1.jpeg",
            type:"  Cabinet",
            price:"50$",
          },
          {
            id:10,
            image:"../Pictures/Pictures/KitchenCabinet3.jpeg",
            type:"Cabinet",
            price:"55$",
          },{
            id:11,
            image:"../Pictures/Pictures/KitchenCabinet5.jpeg",
            type:"Cabinet ",
            price:"80$",
          },
          {
            id:12,
            image:"../Pictures/Pictures/KitchenPantry2.jpeg",
            type:"Pantery",
            price:"60$",
          },
          {
            id:13,
            image:"../Pictures/Pictures/KitchenCabinet4.jpeg",
            type:"Cabinet",
            price:"50$",
          },
          {
            id:14,
            image:"../Pictures/Pictures/KitchenCabinet5.jpeg",
            type:"Cabinet",
            price:"50$",
          },
          {
            id:16,
            image:"../Pictures/Pictures/KitchenCabinet6.jpeg",
            type:"Cabinet",
            price:"50$",
          },
          {
            id:17,
            image:"../Pictures/Pictures/KitchenCabinet7.jpeg",
            type:"Cabinet",
            price:"70$",
          },
      ];
    
      const container = document.querySelector(".Kitchen__container-rows");
      const html = elements.map((element) => `
      <div class="box">
        <img src="${element.image}" alt="">
        <h3> ${element.type}</h3>
        <p> price:${element.price}</p>
      </div>`
    ).join('');
      container.innerHTML = html;
    });         
