# Polish Presidential Candidates Sorting Application

An interactive web application that allows users to explore and sort Polish presidential candidates based on various criteria including age, experience, political stances, and ideological positions.

## Features

- **Multiple Sorting Criteria:**
  - Basic Information (Age, Party Affiliation)
  - Experience (Administrative Experience, Highest Position)
  - Domestic Policy (Climate & Energy, Economy, Security, Social Ideology)
  - Foreign Policy (EU Stance, USA Relations, Russia Stance, Ukraine Stance)

- **Interactive Interface:**
  - Responsive design for all devices
  - Real-time sorting updates
  - Detailed candidate information cards
  - Source links for fact verification

## Technology Stack

- React 18.3
- Vite
- CSS Modules for styling
- Responsive Design

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (included with Node.js)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local server URL provided by Vite

## Project Structure

```
src/
├── components/
│   ├── Layout/         # Header and Footer components
│   ├── Main/           # Main content components
│   └── Sidebar/        # Sorting controls
├── data/              # JSON files with candidate data
├── App.jsx            # Main application component
└── main.jsx          # Application entry point
```

## Data Sources

All candidate information is sourced from:
- Official campaign websites
- Wikipedia
- Verified news sources
- Public statements and interviews

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data verification and fact-checking by independent journalists
- Icons and images from various public sources
- Community contributions and feedback