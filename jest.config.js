module.exports = {
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    // roots: ['src/client/'],
    // collectCoverage: true,
    // collectCoverageFrom: ['src/client/components/**/*.jsx'],
    setupFiles: [ './jest.setup.js'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^.+\\.scss$': 'identity-obj-proxy',
    },
};