import { createEvent, createStore, createEffect, sample } from 'effector'

const fakeApi = {
  getData: async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(["nachos", "burritos", "hot dog"]);
      }, 2000);
    });

    return await promise;
  },
}

const fetchDataFx = createEffect(fakeApi.getData);

export const fetchData = createEvent();
export const addItem = createEvent();
export const clearList = createEvent();

export const $list = createStore([]).reset(clearList);
export const $isLoading = createStore(false)

sample({
  clock: fetchData,
  target: fetchDataFx,
})

sample({
  clock: fetchDataFx.doneData,
  target: $list,
});

sample({
  clock: addItem,
  source: $list,
  fn: (list, item) => [...list, item],
  target: $list,
});

$isLoading
  .on(fetchDataFx, () => true)
  .on(fetchDataFx.done, () => false)
  .on(fetchDataFx.fail, () => false)
