import action from "./action";

export const getProject = (projects, id) => {
  const project = projects.find((project) => project.id === id);
  return project;
};


export const getManager = (managers, id) => {
    const manager = managers.find((manager) => manager.id === id);
    return manager;
  };

export const getStage = (Stages, id) => {
  const stage = Stages.find((stage) => stage.id === id);
  return stage;
};

export const fetchTaskInitialData = async () => {
  const res = await action({
    method: 'get',
    url: '/v1/task/taskinitialdata?limit=0',
  });
  return res.data;
};
