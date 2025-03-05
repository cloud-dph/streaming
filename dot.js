<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embed Fullscreen</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body, html {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
            position: absolute;
            top: 0;
            left: 0;
        }

        #arrow {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 50px;
            font-weight: bold;
            color: white;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px 20px;
            border-radius: 10px;
            display: none;
            transition: opacity 0.5s ease-in-out;
        }
    </style>
</head>
<body>

    <iframe src="https://cloud-dph.github.io/streaming/dph-dc-hash.html"></iframe>
    <div id="arrow">↓</div>

    <script>
        document.addEventListener("keydown", function(event) {
            if (event.key.toLowerCase() === "j") {
                let arrow = document.getElementById("arrow");
                arrow.style.display = "block";
                arrow.style.opacity = "1";

                setTimeout(() => {
                    arrow.style.opacity = "0";
                    setTimeout(() => {
                        arrow.style.display = "none";
                    }, 500);
                }, 3000);
            }
        });
    </script>

</body>
</html>
