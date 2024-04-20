class JwtDeny < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Denylist
end
