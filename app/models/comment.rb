class Comment < ApplicationRecord
  belongs_to :photo

  validates :description, length: {minimum: 2}
end
