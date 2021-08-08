import { gql } from 'apollo-server-micro';
import events from './events.json';
import recommendations from './recommendations.json'

// The statements within quotes are used by GraphQL to provide
// human readable descriptions to developers using the API
export const typeDefs = gql`
	type Event {
    id: ID!
    invite: String!
    name: String!
    description: String!
    startTime: String!
    endTime: String!
    type: String!
    link: String
    mask: String
    test: String
    guests: String!
    color: String!
  }

  type Mutation {
    addEvent(event: EventInput!): EventResponse!
  }

  input EventInput {
    invite: String!
    name: String!
    description: String!
    startTime: String!
    endTime: String!
    type: String!
    link: String
    mask: String
    test: String
    guests: String!
    color: String!
  }

  type EventResponse {
    id: ID!
  }

	type Query {
    events(criteria: EventQueryInput): [Event]
    recommendations(criteria: RecQueryInput!): Recommendation
   }

  input EventQueryInput {
    id: ID
  }

  type Recommendation {
    type: String
    recs: [Rec]
  }

  type Rec {
    img: String
    name: String
    price: String
    link: String
  }

  input RecQueryInput {
    type: String
  }
`
export const resolvers = {
  Query: {
    // Returns array of all beasts.
    recommendations: (criteria) => recommendations.filter(rec => { return(rec.invite === criteria.type)}),
    events: (criteria) => {
      if(criteria.id === ''){
        return events;
      }
      return events.filter(event => {return event.id === criteria.id});
    }
  }
}
