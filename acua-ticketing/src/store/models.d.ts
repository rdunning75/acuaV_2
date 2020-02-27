export interface Ticket {
  // id: string
  // number: number
  // index_: number
  // phone: string
  // name: string
  // query: string
  // location: string
  // window: number
  // strikes: number
  // isComplete: boolean,


  tic_id: number,
	user_id: number,
	loc_id: number,
	win_id: number,
	time_created: string,
	time_serviced: string,
	first_name: string,
	last_name: string,
	reason_of_visit: string,
	user_note: string,
    // foreign key (user_id) references Users(id),
    // foreign key (loc_id) references Location(id)
}

export interface Faq {
  id: number
  index: number
  query: string
  answer: string | null
  window: number
  isComplete: boolean
}

export interface User {
  id: number
  win_id: number
  username: string
  password: string
  first_name: string
  last_name: string
  loc_id: number
}

export interface UserSubmit {
  username: string
  password: string
}

export interface UserResponse {
  user: User
}
