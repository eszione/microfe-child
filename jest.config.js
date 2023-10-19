module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
        '^.+\\.(j|t)s?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!cosmos-components).+\\.js$'],
};
