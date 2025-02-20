# Tricalc - Triathlon Race Calculator

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.4.7-blue.svg)](https://ant.design/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

## About

<p align="center"> 
    <a href="https://pace-calculator.online/">
         <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/rokokos97/tricalc/b37a836976e5735d1f4d87b703e5a636aecd9867/public/tri.svg">
            <source media="(prefers-color-scheme: light)" srcset="https://cdn-icons-png.flaticon.com/512/6835/6835995.png">
            <img alt="Tricalc logo" src="https://cdn-icons-png.flaticon.com/512/6835/6835995.png" height="140">
         </picture>
    </a>
</p>
<p>  
   This app is specifically designed to help individuals improve their results in triathlon races.
With its user-friendly interface and advanced features, you can track and analyze your performance,
set goals, and take your training to the next level. Whether you're a seasoned athlete or just starting out,
this app will be your ultimate companion in achieving your personal best in triathlon.
This app was developed in collaboration with my old friend and the talented designer, Olig Umansky.
</p>

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/rokokos97/tricalc.git
cd tricalc
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`

## 🛠️ Technologies and Libraries
<p align="center"> 
    <a href="https://react.dev/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js logo" height="140">
    </a>
</p>
<p>  
    The library for web and native user interfaces.
</p>

| [Docs](https://react.dev/learn) | [Quick start](https://react.dev/learn/installation) |

## ant.designe
<p align="center"> 
    <a href="https://ant.design/">
        <img src="https://www.specbee.com/sites/default/files/inline-images/Ant.png" alt="React.js logo" height="140">
    </a>
</p>
<p>  
    Help designers/developers building beautiful products more flexible and working with happiness

</p>

| [Git Docs](https://github.com/ant-design/ant-design) | [Getting started](https://ant.design/components/overview/) |

### Jest
<p align="center"> 
    <a href="https://jestjs.io/uk/">
        <img src="https://raw.githubusercontent.com/jestjs/jest/main/website/static/img/jest-readme-headline.png" alt="Jest logo" height="140">
    </a>
</p>
<p>  
    A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.
</p>

| [Docs](https://github.com/jestjs/jest#getting-started) | [Quick start](https://jestjs.io/uk/docs/getting-started) |


### Docker
<p align="center"> 
    <a href="https://www.docker.com/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker logo" height="80">
    </a>
</p>
<p align="center">  
    Docker makes development efficient and predictable
Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development – desktop and cloud. Docker’s comprehensive end to end platform includes UIs, CLIs, APIs and security that are engineered to work together across the entire application delivery lifecycle.
</p>

| [Docs](https://docs.docker.com/) | [Quick Start](https://docs.docker.com/get-started/) | [Video Tutorial](https://www.youtube.com/watch?v=n9uCgUzfeRQ) |

## 📝 Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages

## 🛠 Testing

This project uses Jest and React Testing Library for testing. To run the tests:

```bash
npm test
```

To run tests in watch mode:

```bash
npm test -- --watch
```

## 🚀 Deployment

The app is deployed using Docker and hosted on Kamatera. For local deployment using Docker:

1. Build the Docker image:
```bash
docker build -t tricalc .
```

2. Run the container:
```bash
docker run -p 3000:3000 tricalc
```

## 💪 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Authors

- **Rostyslav Lisovyi** - *Initial work* - [rokokos97](https://github.com/rokokos97)
- **Olig Umansky** - *Design*

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details




