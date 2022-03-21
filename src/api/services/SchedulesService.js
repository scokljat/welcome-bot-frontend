const SchedulesService = {
  fetchSchedules: () => {
    return [
      {
        createdAt: '2022-03-21',
        isActive: true,
        isRepeat: true,
        message: {
          createdAt: '2022-03-21',
          id: 0,
          text: 'First message',
          title: 'string',
        },
        nextRun: '2022-03-21T10:58:48.009Z',
        runDate: 'yyyy-MM-dd HH:mm:ss',
        id: 0,
        schedulerInterval: 'DAY',
      },
      {
        createdAt: '2022-03-19',
        isActive: true,
        isRepeat: true,
        message: {
          createdAt: '2022-03-25',
          id: 0,
          text: 'Second message',
          title: 'string',
        },
        nextRun: '2022-03-26T10:58:48.009Z',
        runDate: 'yyyy-MM-dd HH:mm:ss',
        id: 0,
        schedulerInterval: 'DAY',
      },
      {
        createdAt: '2022-03-18',
        isActive: false,
        isRepeat: true,
        message: {
          createdAt: '2022-03-18',
          id: 0,
          text: 'Third message',
          title: 'string',
        },
        nextRun: '2022-03-18T10:58:48.009Z',
        runDate: 'yyyy-MM-dd HH:mm:ss',
        id: 0,
        schedulerInterval: 'DAY',
      },
    ];
  },
};

export default SchedulesService;
