class Vote < ApplicationRecord
  belongs_to :video
  belongs_to :user

  validates :user, uniqueness: { scope: :video_id, message: "has already been voted" }
end
