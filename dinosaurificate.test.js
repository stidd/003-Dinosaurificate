const dino = require('./dinosaurificate');

test('test1', () => {
    expect(dino("John")).toBe("Johnosaurus")
})


test('test2', () => {
    expect(dino("b").length).toBeGreaterThan(7)
});


test('test3', () => {
    expect(dino("Sue")).toBe("Sueosaurus")
});
