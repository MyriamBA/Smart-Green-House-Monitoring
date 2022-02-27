export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: 'You have 4 tasks not done yet.',
        time: 'Just Now'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hdd',
        task: 'You have to check your plants List.',
        time: '2 Hours ago'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag-check',
        task: 'New order received.',
        time: '1 March'
    },
    {
        class: 'bg-danger',
        icon: 'bi bi-person',
        task: 'New client registred.',
        time: '2 March'
    },
    {
        class: 'bg-primary',
        icon: 'bi bi-bell',
        task: 'You have a real time notification.',
        time: 'Just Now'
    },

] 