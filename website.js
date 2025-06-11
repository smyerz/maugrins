<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your GitHub Pages Site</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: white;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        header {
            text-align: center;
            margin-bottom: 4rem;
            animation: fadeInDown 1s ease-out;
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #fff, #f0f8ff);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .subtitle {
            font-size: 1.3rem;
            opacity: 0.9;
            font-weight: 300;
        }

        .hero-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }

        .card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
            cursor: pointer;
        }

        .card:hover {
            transform: translateY(-10px) scale(1.02);
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #fff;
        }

        .card p {
            line-height: 1.6;
            opacity: 0.9;
        }

        .interactive-demo {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            margin: 2rem 0;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .demo-button {
            background: linear-gradient(45deg, #ff6b6b, #ee5a6f);
            border: none;
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 0.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .demo-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            background: linear-gradient(45deg, #ff5252, #e91e63);
        }

        .demo-result {
            margin-top: 1rem;
            padding: 1rem;
            background: rgba(0,0,0,0.2);
            border-radius: 10px;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 500;
        }

        .floating-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .shape {
            position: absolute;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }

        .shape:nth-child(1) {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .shape:nth-child(2) {
            top: 60%;
            right: 10%;
            animation-delay: 2s;
        }

        .shape:nth-child(3) {
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        footer {
            text-align: center;
            margin-top: 4rem;
            padding: 2rem;
            opacity: 0.8;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
            }
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .container {
                padding: 1rem;
            }
            
            .card {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="floating-shapes">
        <div class="shape" style="width: 100px; height: 100px; background: linear-gradient(45deg, #ff9a9e, #fad0c4); border-radius: 50%;"></div>
        <div class="shape" style="width: 80px; height: 80px; background: linear-gradient(45deg, #a8edea, #fed6e3); border-radius: 20px;"></div>
        <div class="shape" style="width: 120px; height: 120px; background: linear-gradient(45deg, #ffecd2, #fcb69f); border-radius: 50%;"></div>
    </div>

    <div class="container">
        <header>
            <h1>Welcome to Your Site</h1>
            <p class="subtitle">Built for GitHub Pages • Powered by Modern JavaScript</p>
        </header>

        <div class="hero-section">
            <div class="card" onclick="animateCard(this)">
                <h3>🚀 Fast & Modern</h3>
                <p>Built with vanilla JavaScript and modern CSS. No frameworks needed - just pure performance and beautiful design that loads instantly.</p>
            </div>
            
            <div class="card" onclick="animateCard(this)">
                <h3>📱 Fully Responsive</h3>
                <p>Looks amazing on desktop, tablet, and mobile. The design adapts seamlessly to any screen size with fluid animations.</p>
            </div>
            
            <div class="card" onclick="animateCard(this)">
                <h3>🎨 Customizable</h3>
                <p>Easy to modify and extend. Change colors, add sections, or integrate with APIs. The code is clean and well-documented.</p>
            </div>
        </div>

        <div class="interactive-demo">
            <h3>Interactive Demo</h3>
            <p>Try out some JavaScript functionality:</p>
            
            <button class="demo-button" onclick="showTime()">Show Current Time</button>
            <button class="demo-button" onclick="generateQuote()">Random Quote</button>
            <button class="demo-button" onclick="changeTheme()">Change Theme</button>
            
            <div class="demo-result" id="demoResult">
                Click any button above to see the magic happen!
            </div>
        </div>

        <footer>
            <p>&copy; 2025 Your GitHub Pages Site • Ready to customize and deploy!</p>
        </footer>
    </div>

    <script>
        // Smooth scrolling for better UX
        document.addEventListener('DOMContentLoaded', function() {
            // Add some initial animations
            const cards = document.querySelectorAll('.card');
            cards.forEach((card, index) => {
                card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s both`;
            });
        });

        // Interactive functions
        function showTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour12: true,
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit'
            });
            const dateString = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            document.getElementById('demoResult').innerHTML = `
                <div>
                    <div style="font-size: 1.4rem; margin-bottom: 0.5rem;">${timeString}</div>
                    <div style="opacity: 0.8;">${dateString}</div>
                </div>
            `;
        }

        function generateQuote() {
            const quotes = [
                "The only way to do great work is to love what you do. - Steve Jobs",
                "Innovation distinguishes between a leader and a follower. - Steve Jobs",
                "Life is what happens to you while you're busy making other plans. - John Lennon",
                "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
                "It is during our darkest moments that we must focus to see the light. - Aristotle",
                "Code is like humor. When you have to explain it, it's bad. - Cory House",
                "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
            ];
            
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('demoResult').innerHTML = `<div style="font-style: italic; line-height: 1.4;">"${randomQuote}"</div>`;
        }

        let currentTheme = 0;
        const themes = [
            {
                name: "Ocean Breeze",
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                accent: "linear-gradient(45deg, #4facfe, #00f2fe)"
            },
            {
                name: "Sunset Glow",
                gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
                accent: "linear-gradient(45deg, #ff8a80, #ff5722)"
            },
            {
                name: "Forest Dream",
                gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
                accent: "linear-gradient(45deg, #66bb6a, #4caf50)"
            },
            {
                name: "Purple Rain",
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                accent: "linear-gradient(45deg, #9c27b0, #673ab7)"
            }
        ];

        function changeTheme() {
            currentTheme = (currentTheme + 1) % themes.length;
            const theme = themes[currentTheme];
            
            document.body.style.background = theme.gradient;
            
            // Update demo buttons
            const buttons = document.querySelectorAll('.demo-button');
            buttons.forEach(button => {
                button.style.background = theme.accent;
            });
            
            document.getElementById('demoResult').innerHTML = `
                <div>
                    <div style="font-size: 1.3rem; margin-bottom: 0.5rem;">🎨 Theme Changed!</div>
                    <div style="opacity: 0.9;">Now using: ${theme.name}</div>
                </div>
            `;
        }

        function animateCard(card) {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        }

        // Add fadeInUp animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        // Smooth hover effects for better interactivity
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    </script>
</body>
</html>