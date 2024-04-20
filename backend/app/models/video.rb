class Video < ApplicationRecord
  validates :src, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: 'only allows url' }
end
