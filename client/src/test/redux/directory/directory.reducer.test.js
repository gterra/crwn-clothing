import directoryReducer, {
  INITIAL_STATE,
} from "../../../redux/directory/directory.reducer";

describe("directoryReducer", () => {
  it("should return initial state", () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
