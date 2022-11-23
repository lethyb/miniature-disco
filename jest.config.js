module.exports = {
    verbose: true,
    roots: [
        "src"
    ],
    testRegex: "\\.test\\.tsx?$",
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {tsconfig: 'tsconfig.json'},
        ],
    },
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
}
