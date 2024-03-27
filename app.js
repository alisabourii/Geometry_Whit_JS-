         
        function draw() {
            var heightSZ = (document.getElementById("hgsz").value)*10;
            var WidthSZ = (document.getElementById("wisz").value)*10;
            var status = "";
            if(document.getElementById("square").checked) {
                //status = "square";
                square(WidthSZ,heightSZ);
            }
            if(document.getElementById("triangle").checked) 
                triangle(WidthSZ,heightSZ);

            if(document.getElementById("cirecle").checked) 
                drawCircle(heightSZ);
            //-------------------------------------------------------
            
            
            
        }
        function square( WidthSZ,heightSZ){
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.rect(20, 20, WidthSZ, heightSZ);
            ctx.stroke();
            document.getElementById("perimeter").innerText = "Perimeter: "+ (2*(WidthSZ+heightSZ))/10;
            document.getElementById("area").innerText = "Area: "+ ((WidthSZ*heightSZ))/10;
        }

        function triangle( WidthSZ, heightSZ){
            const canvas = document.getElementById("canvas");
            if (canvas.getContext) {
                const ctx = canvas.getContext("2d");
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                ctx.beginPath();
                ctx.moveTo(75, 50);
                ctx.lineTo(100, 75);
                ctx.lineTo(100, 25);
                ctx.fill();
            }
        }
        
        function drawCircle(radius) {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.arc(100, 100, 50, 0, radius * Math.PI);
            ctx.stroke();
        }