import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    // Arrange
    let component = new VoteComponent();
    
    it('should increment totalVotes when upvoted', () => {
        // Act
        component.upVote()

        // Assert
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when downvotes', () => {
        let component = new VoteComponent();
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    });
});
