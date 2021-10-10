type rootState = {}

type Action = {
  type: string,
}

export const rootReducer = (
  state: rootState = {},
  action: Action,
) => state;