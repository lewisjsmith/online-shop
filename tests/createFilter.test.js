import createFilter from "../src/helperFunctions/createFilter";

it("Separates a pathname into an array of filter categories", () => {

    expect(createFilter("/one/two/three/")).toEqual(["one", "two", "three"]);

});