class Video < ApplicationRecord
  has_many :votes

  validates :src, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: 'only allows url' }

  def voted?(user)
    if votes.loaded?
      votes.any? { |vote| vote.user_id == user.id }
    else
      votes.where(user: user).exists?
    end
  end
end
