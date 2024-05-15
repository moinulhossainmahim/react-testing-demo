import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';

describe('UserList', () => {
  it('should render not render any users if the users array is empty', () => {
    render(<UserList users={[]} />)

    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  })

  it('should render users list if users array is not empty', () => {
    const users: User[] = [
      {
        id: 1,
        name: 'Moinul',
      }
    ]

    render(<UserList users={users} />)

    users.forEach(user => {
      const link = screen.getByRole('link', { name: user.name })
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/users/${user.id}`);
    })
  })

})
